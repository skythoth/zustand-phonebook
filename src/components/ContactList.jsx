import React, { useState } from 'react'
import { Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import usePhonebookStore from '../stores/usePhonebookStore'

const ContactList = () => {
    const {phoneBook} = usePhonebookStore()
    const [search, setSearch] = useState('')

    const filteredList = phoneBook.filter((item) =>
      item.name.includes(search) || item.phoneNumber.includes(search)
    )

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        연락처 목록
      </Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="이름 또는 전화번호 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />
      {filteredList.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
          등록된 연락처가 없습니다.
        </Typography>
      ) : (
        <List>
          {filteredList.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <Divider />}
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{item.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.phoneNumber} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  )
}

export default ContactList
