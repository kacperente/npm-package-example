import "@fontsource/lexend-mega/700.css"

import './App.css'

import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import Stack from "./components/Stack/Stack"
import Text from "./components/Text/Text"

function App() {

  return (
    <Card>
      <Stack direction="column">
        <Text>Hello!</Text>
        <Text>I'm a neubrutalist card! Do you want to know more?</Text>
        <Stack direction="row" gap="16px">
          <Button variant="primary">Tell me more!</Button>
          <Button variant="secondary">No thanks!</Button>
        </Stack>
      </Stack>
    </Card>
  )
}

export default App
