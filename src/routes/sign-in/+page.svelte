<script lang="ts">
  import { resolve } from '$app/paths';
  import { LoginForm } from '$lib/Form';
</script>

<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f8fafc;">
  <div style="width:100%;max-width:400px;padding:2rem;">
    <div style="text-align:center;margin-bottom:2rem;">
      <div style="width:48px;height:48px;background:#3b82f6;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1rem;">
        <span style="color:white;font-size:1.25rem;font-weight:700;">A</span>
      </div>
      <h1 style="margin:0 0 0.25rem;font-size:1.5rem;">Welcome back</h1>
      <p style="color:#64748b;margin:0;font-size:0.875rem;">Sign in to your Acme account to continue</p>
    </div>

    <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.07);">
      <LoginForm />
    </div>

    <p style="text-align:center;margin-top:1.5rem;color:#64748b;font-size:0.875rem;">
      Don't have an account? <a href={resolve('/register')} style="color:#3b82f6;text-decoration:none;">Sign up for free</a>
    </p>
    <p style="text-align:center;margin-top:0.5rem;">
      <a href={resolve('/forgot-password')} style="color:#64748b;font-size:0.875rem;text-decoration:none;">Forgot your password?</a>
    </p>
  </div>
</div>
