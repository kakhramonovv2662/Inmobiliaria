# Styled Components Rules

```js
const Headline = styled.h1`
  font-size: ${props => props.theme.sizePxToRem(24)};
`;

function App() {
  return <Headline>Text</Headline>;
}
```

** Ko'p uchridigan style-larni umumiy style-ga chiqazi ulardan meros olib yozish **

```js
const Headline = styled.h1`
  color: green;
`;
const HeadlineItalic = styled(Headline)`
  font-style: italic;
`;
```

** Stillarni shartli ko'rsatish kerak bo'sa props-lardan foydalanish **

```js
const Headline = styled.h1`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

function App() {
  return <Headline show={false}>Text</Headline>;
}
```
