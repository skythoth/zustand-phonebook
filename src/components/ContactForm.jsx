import React, { useState } from 'react'
import { TextField, Box, Button, Paper, Typography } from '@mui/material'
import usePhonebookStore from '../stores/usePhonebookStore'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {addContact} = usePhonebookStore()

    const handleAddContact = () => {
        if(!name.trim() || !phoneNumber.trim()) {
            alert('이름과 전화번호를 모두 입력해주세요.')
            return
        }

        addContact(name, phoneNumber)
        setName('')
        setPhoneNumber('')
    }

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        연락처 추가
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField id="name" label="이름" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="phoneNumber" label="전화번호" variant="outlined" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <Button variant="contained" size="large" onClick={handleAddContact}>추가</Button>
      </Box>
    </Paper>
  )
}

export default ContactForm