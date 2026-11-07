/* ---------- Feedback: a short form for grown-ups, sent by email through FormSubmit (formsubmit.co) ---------- */

/* WHERE FEEDBACK GOES
   Put your email address between the quotes, for example "you@example.com".
   The first message sent from the live site makes FormSubmit email you an "Activate Form" button.
   That email also gives you a random alias: put the alias here instead of your address,
   so your real address isn't visible in the page source. */
var FEEDBACK_TO = "";

(function () {
  var $ = function (id) { return document.getElementById(id); };
  var form = $('lf-fb-form'), send = $('lf-fb-send'), status = $('lf-fb-status');
  var sending = false;

  function say(text, kind) {
    status.textContent = text;
    status.className = 'lf-fb-status' + (kind ? ' ' + kind : '');
  }
  function ready() { return /^\S+@\S+$/.test(FEEDBACK_TO) || /^[a-f0-9]{20,}$/i.test(FEEDBACK_TO); }

  function show() {
    sending = false;
    send.disabled = !ready();
    send.textContent = 'Send';
    say(ready() ? '' : 'Sending isn’t switched on yet, so this form can’t send messages.', ready() ? '' : 'note');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending || !ready()) return;
    var message = $('lf-fb-message').value.trim(), name = $('lf-fb-name').value.trim(), email = $('lf-fb-email');
    if (!message) { say('Please write a message first.', 'bad'); $('lf-fb-message').focus(); return; }
    if (email.value.trim() && !email.checkValidity()) {
      say('That email address doesn’t look right. Check it, or leave it blank.', 'bad'); email.focus(); return;
    }
    var body = {
      _subject: 'Learning is fun! feedback' + (name ? ' from ' + name : ''),
      _template: 'table',
      _honey: $('lf-fb-trap').value,
      message: message,
      page: location.href
    };
    /* name and email only when given: FormSubmit uses the email for its Reply button */
    if (name) body.name = name;
    if (email.value.trim()) body.email = email.value.trim();
    sending = true;
    send.disabled = true;
    send.textContent = 'Sending…';
    say('', '');
    fetch('https://formsubmit.co/ajax/' + FEEDBACK_TO.trim(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d && (d.success === true || d.success === 'true')) {
        form.reset();
        say('Thank you! Your message is on its way.', 'good');
      } else {
        /* before the form is activated, FormSubmit explains what to do; show that to whoever is testing */
        say('The message didn’t send.' + (d && d.message ? ' ' + d.message : ' Please try again later.'), 'bad');
      }
    }).catch(function () {
      say('The message didn’t send. Check that you’re online, then try again.', 'bad');
    }).then(function () {
      sending = false;
      send.disabled = false;
      send.textContent = 'Send';
    });
  });

  LF.apps.feedback = { show: show };
})();
