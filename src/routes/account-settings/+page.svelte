<script lang="ts">
  import { Toggle } from '$lib/Toggle';
  import { Collapsible } from '$lib/Collapsible';
  import { PinInput } from '$lib/PinInput';
  import Divider from '$lib/Divider';

  let emailNotifications = $state(true);
  let pushNotifications = $state(false);
  let smsAlerts = $state(false);
  let weeklyDigest = $state(true);
  let marketingEmails = $state(false);
</script>

<main style="padding:2rem;max-width:680px;margin:0 auto;">
  <h1 style="margin-bottom:0.25rem;">Account Settings</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Manage your preferences and security settings.</p>

  <section style="margin-bottom:1.5rem;">
    <Collapsible label="Notification Preferences">
      <div style="display:flex;flex-direction:column;gap:1rem;padding-top:1rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="margin:0;font-weight:500;">Email notifications</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Receive updates via email</p>
          </div>
          <Toggle
            label="Toggle email notifications"
            pressed={emailNotifications}
            onPressedChange={(p) => { emailNotifications = p; }}
          >✉</Toggle>
        </div>
        <Divider />
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="margin:0;font-weight:500;">Push notifications</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Browser and mobile push alerts</p>
          </div>
          <Toggle
            label="Toggle push notifications"
            pressed={pushNotifications}
            onPressedChange={(p) => { pushNotifications = p; }}
          >🔔</Toggle>
        </div>
        <Divider />
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="margin:0;font-weight:500;">SMS alerts</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Critical alerts via text message</p>
          </div>
          <Toggle
            label="Toggle SMS alerts"
            pressed={smsAlerts}
            onPressedChange={(p) => { smsAlerts = p; }}
          >📱</Toggle>
        </div>
        <Divider />
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="margin:0;font-weight:500;">Weekly digest</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Summary of activity every Monday</p>
          </div>
          <Toggle
            label="Toggle weekly digest"
            pressed={weeklyDigest}
            onPressedChange={(p) => { weeklyDigest = p; }}
          >📊</Toggle>
        </div>
        <Divider />
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="margin:0;font-weight:500;">Marketing emails</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Product news and special offers</p>
          </div>
          <Toggle
            label="Toggle marketing emails"
            pressed={marketingEmails}
            onPressedChange={(p) => { marketingEmails = p; }}
          >📣</Toggle>
        </div>
      </div>
    </Collapsible>
  </section>

  <section style="margin-bottom:1.5rem;">
    <Collapsible label="Two-Factor Authentication">
      <div style="padding-top:1rem;">
        <p style="color:#64748b;margin-bottom:1rem;">Enter your authenticator code to verify your identity and update your 2FA settings.</p>
        <PinInput label="Verification code" maxLength={6} type="numeric" otp />
      </div>
    </Collapsible>
  </section>

  <section>
    <Collapsible label="Privacy & Data">
      <div style="padding-top:1rem;">
        <p style="color:#64748b;margin-bottom:1rem;">Control how your data is used and who can see your activity.</p>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <p style="margin:0;padding:0.75rem;background:#fef9c3;border-radius:0.375rem;font-size:0.875rem;color:#854d0e;">
            Your data is stored securely and never sold to third parties.
          </p>
        </div>
      </div>
    </Collapsible>
  </section>
</main>
