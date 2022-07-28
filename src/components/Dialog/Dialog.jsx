import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export function FormDialog({content ,open , setOpen , listCard , setListCard}) {
  const [editeValues, setEditeValues] = useState({
    id:content.iddadosclient,
    name:content.name,
    category:content.category,
    value:content.value,
  })


  function handleSalveEdit () {
    axios.put("http://localhost:3001/edit" , {
      id:editeValues.id,
      name:editeValues.name,
      category:editeValues.category,
      value:editeValues.value,
    })
    handleClose();
 }
  
 function handleDeleteCard (){
  axios.delete(`http://localhost:3001/detele/${editeValues.id}`);
  
 }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChangeValues = value => {
    setEditeValues(prevValues=>({
      ...prevValues,
      [value.target.id]:value.target.value,
    }));
  }


  return (
   
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome da cliente..."
            type="text"
            fullWidth
            defaultValue={content.name}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Procedimento..."
            type="text"
            fullWidth
            defaultValue={content.category}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="value"
            label="Valor..."
            type="text"
            fullWidth
            defaultValue={content.value}
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleDeleteCard} color="primary">
            Excluir
          </Button>
          <Button onClick={handleSalveEdit} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}