import React from 'react';
import SignInButton from './SignInButton';

function SignInOptions({ mode }) {
  if (mode === 'selfhosted') {
    return (
      <div className="space-y-3">
        <SignInButton provider="gitlab" label="Self Hosted GitLab" />
        <SignInButton provider="azure" label="Sign in with SSO" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <SignInButton provider="github" label="Sign in with Github" />
      <SignInButton provider="bitbucket" label="Sign in with Bitbucket" />
      <SignInButton provider="azure" label="Sign in with Azure Devops" />
      <SignInButton provider="gitlab" label="Sign in with GitLab" />
    </div>
  );
}

export default SignInOptions;