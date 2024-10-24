'use client'

import React, { useState, FormEvent } from 'react'
import styled from 'styled-components'
import { FiUser, FiLock } from 'react-icons/fi' // Icons for inputs
import CustomInput from '@/components/atoms/custom-input' // Adjust path as per your setup
import CustomButton from '@/components/atoms/custom-button' // Adjust path as per your setup
import Footer from '@/components/templates/footer' // Adjust path as per your setup

// Styled container for the login page
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height to center the form */
  background-color: #333;
`

const FormContainer = styled.form`
  /* Changed from div to form to handle form submission */
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.8);
  text-align: center;
`

const Logo = styled.img`
  max-width: 280px;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 30px auto;
`

const FormElement = styled.div`
  margin-bottom: 15px;
`

const FormSubmit = styled.div`
  margin-bottom: 15px;
  padding: 10px;
`

const ForgotPasswordLink = styled.a`
  display: block;

  color: #007bff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 15px 0 10px;
  &:hover {
    text-decoration: underline;
  }
`

const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  background-color: #333;
  color: rgba(255, 255, 255, 0.7);
`

// Main Login Page Component
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null) // To store validation error

  const handleLogin = (event: FormEvent) => {
    event.preventDefault() // Prevent default form submission

    // Simple validation example
    if (!username || !password) {
      setErrorMessage('Please fill out both fields.')
      return
    }

    setErrorMessage(null) // Clear the error message
    // Perform actual login logic here
  }

  return (
    <PageContainer>
      <FormContainer onSubmit={handleLogin}>
        {/* Add the logo image here */}
        <Logo src="/images/pro.webp" alt="Beauty Scandal Pro Logo" />

        {/* Input Fields and Button with margin */}
        <FormElement>
          <CustomInput
            icon={<FiUser />}
            placeholder="アカウント名"
            value={username}
            onChange={setUsername}
            type="text"
            required
          />
        </FormElement>

        <FormElement>
          <CustomInput
            icon={<FiLock />}
            placeholder="パスワード"
            value={password}
            onChange={setPassword}
            type="password"
            validate={(value: string) => {
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter'
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number'
              }
              return null
            }}
            required
          />
        </FormElement>

        {/* Display error message if form is not filled */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <FormSubmit>
          <CustomButton size="small" variant="primary" type="submit">
            ログイン
          </CustomButton>
        </FormSubmit>

        <ForgotPasswordLink href="#">パスワードを忘れた場合</ForgotPasswordLink>
      </FormContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PageContainer>
  )
}

export default LoginPage
