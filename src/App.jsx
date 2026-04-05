import './App.css'
import { Grid, Container, Typography, Box } from '@mui/material'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h3" fontWeight="bold" gutterBottom>
          주소록
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{xs:12, md:4}}>
            <ContactForm />
          </Grid>
          <Grid size={{xs:12, md:8}}>
            <ContactList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default App
