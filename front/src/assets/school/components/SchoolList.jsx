import React, {useContext, useEffect} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {SchoolContext} from "../stores/SchoolContext.jsx";
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";

export const SchoolList = () => {

    const {
        filterActive,
        filterRegion,
        filterSchoolType,

        getSchools,
        handleChangeFilterActive,
        handleChangeFilterSchoolType,
        handleChangeFilterRegion,

        handleChangeNewSchoolEdrpou,
        handleChangeNewSchoolName,
        handleChangeNewSchoolRegion,
        handleChangeNewSchoolSchoolType,

        handleClickCreationDialogClose,
        handleClickCreationDialogConfirm,
        handleClickCreationDialogOpen,

        handleClickDeactivationDialogClose,
        handleClickDeactivationDialogConfirm,
        handleClickDeactivationDialogOpen,

        handleClickFilter,
        isOpenCreationDialog,
        isOpenDeactivationDialog,
        nameDeactivationDialog,

        newSchoolEdrpou,
        newSchoolName,
        newSchoolRegion,
        newSchoolSchoolType,

        schools,
    } = useContext(SchoolContext);

    useEffect(() => {
        getSchools();
    }, []);
    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={2}>
                <Grid>
                    <TextField
                        fullWidth
                        label={'Region'}
                        onChange={({target}) => handleChangeFilterRegion(target.value)}
                        value={filterRegion}/>
                </Grid>
                <Grid>
                    <Select
                        value={filterSchoolType}
                        label='SchoolType'
                        onChange={({target}) => handleChangeFilterSchoolType(target.value)}
                        variant='outlined'>
                        <MenuItem value={null}></MenuItem>
                        <MenuItem value={'GYMNASIUM'}>GYMNASIUM</MenuItem>
                        <MenuItem value={'LYCEUM'}>LYCEUM</MenuItem>
                        <MenuItem
                            value={'GENERAL_SECONDARY_EDUCATION_INSTITUTION'}>GENERAL_SECONDARY_EDUCATION_INSTITUTION</MenuItem>
                    </Select>
                </Grid>
                <Grid>
                    <RadioGroup
                        value={filterActive}
                        onChange={({target}) => handleChangeFilterActive(target.value)}
                    >
                        <FormControlLabel defaultChecked={true} value="" control={<Radio/>} label="All"/>
                        <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                        <FormControlLabel value="false" control={<Radio/>} label="No"/>
                    </RadioGroup>
                </Grid>
                <Grid>
                    <Button variant="outlined"
                            onClick={handleClickFilter}>Filter</Button>
                    <Button variant="outlined"
                            onClick={handleClickCreationDialogOpen}>Create</Button>
                </Grid>
            </Grid>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Region</TableCell>
                            <TableCell>EDRPOU</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Active</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schools.map((school) => (
                            <TableRow key={school.id}>
                                <TableCell>{school.id}</TableCell>
                                <TableCell>{school.name}</TableCell>
                                <TableCell>{school.region}</TableCell>
                                <TableCell>{school.edrpou}</TableCell>
                                <TableCell>{school.schoolType}</TableCell>
                                <TableCell>
                                    {school.active && (
                                        <Button variant="outlined"
                                                onClick={() => handleClickDeactivationDialogOpen(school.id, school.name)}>
                                            Deactivate
                                        </Button>)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={isOpenDeactivationDialog} onClose={handleClickDeactivationDialogClose}>
                <DialogTitle>Deactivation confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deactivate school with name: {nameDeactivationDialog}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickDeactivationDialogClose}>Cancel</Button>
                    <Button onClick={handleClickDeactivationDialogConfirm}>Confirm</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={isOpenCreationDialog} onClose={handleClickCreationDialogClose}>
                <DialogTitle>Creation school</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label={'Name'}
                        onChange={({target}) => handleChangeNewSchoolName(target.value)}
                        value={newSchoolName}
                    />
                    <TextField
                        fullWidth
                        label={'EDRPOU'}
                        onChange={({target}) => handleChangeNewSchoolEdrpou(target.value)}
                        value={newSchoolEdrpou}
                    />
                    <TextField
                        fullWidth
                        label={'Region'}
                        onChange={({target}) => handleChangeNewSchoolRegion(target.value)}
                        value={newSchoolRegion}
                    />
                    <Select
                        fullWidth
                        value={newSchoolSchoolType}
                        label='SchoolType'
                        onChange={({target}) => handleChangeNewSchoolSchoolType(target.value)}
                        variant='outlined'>
                        <MenuItem value={null}></MenuItem>
                        <MenuItem value={'GYMNASIUM'}>GYMNASIUM</MenuItem>
                        <MenuItem value={'LYCEUM'}>LYCEUM</MenuItem>
                        <MenuItem
                            value={'GENERAL_SECONDARY_EDUCATION_INSTITUTION'}>GENERAL_SECONDARY_EDUCATION_INSTITUTION</MenuItem>
                    </Select>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCreationDialogClose}>Cancel</Button>
                    <Button onClick={handleClickCreationDialogConfirm}>Confirm</Button>
                </DialogActions>
            </Dialog>

        </Container>
    )
}
