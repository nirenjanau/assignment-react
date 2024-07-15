
import LoginContent from './LoginContent'
import LoginPageHeader from './LoginPageHeader'
import LoginPageText from './LoginPageText'
import SignUpContent from './SignUpContent'

export  default function LoginPage() {
  return (
    <div className="main-page">
      <LoginPageHeader />
      <div className="flex-container">
        <div className="left">
          <LoginPageText />
        </div>
        <div className="right">
          <LoginContent />
          <SignUpContent />
        </div>
      </div>
    </div>
  )
}