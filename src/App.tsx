import React, { useState } from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackProps, IStackStyles, ITextStyles, TextField, DefaultButton } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'left',
    color: '#605e5c',
  },
  inner: {
    width: '100%'
  }
};

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: '500px' } }
};

export const App: React.FunctionComponent = () => {

  
  const [firstName, setFirstName] = useState('first name');
  const [lastName, setLastName] = useState('last name');
  const [email, setEmail] = useState('email@domain.com');
  const [password, setPassword] = useState('password');

  const [user, setUser] = useState(
                                  {
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: ''
                                  });
  console.log(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}
const submitUser = (e) => {
  localStorage.setItem('user', JSON.stringify(user))
}
  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <img className="App-logo" src={logo} alt="logo" />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to my first Fluent UI app
      </Text>
      <Text variant="large" styles={boldStyle}>
        You Register Here
      </Text>
      <Stack tokens={stackTokens} horizontalAlign="start" {...columnProps} >
        <TextField label="First Name" errorMessage="Enter First Name" defaultValue={firstName} name="firstName" onChange={(e) => {setFirstName(e.currentTarget.value); handleInputChange(e)}}/> {firstName}
        <TextField label="Last Name" errorMessage="Enter Last Name" defaultValue={lastName} name="lastName" onChange={(e) => {setLastName(e.currentTarget.value); handleInputChange(e)}}/> {lastName}
        <TextField label="Email" errorMessage="Enter Email" defaultValue={email} name="email" onChange={(e) => {setEmail(e.currentTarget.value); handleInputChange(e)}}/>{email}
        <TextField label="Password" type="password" canRevealPassword revealPasswordAriaLabel="Show password" defaultValue={password} name="password" onChange={(e) => {setPassword(e.currentTarget.value); handleInputChange(e)}}/> {password}
        <DefaultButton text='Submit' onClick={(e) => submitUser(e)} />
        <Text variant="large"></Text>
      </Stack>
      <Text variant="large" styles={boldStyle}>
          Essential links
        </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/microsoft/fluentui/">Github</Link>
        <Link href="https://twitter.com/fluentui">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design system
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
        <Link href="https://aka.ms/themedesigner">Theme designer</Link>
      </Stack>
    </Stack>
  );
};
