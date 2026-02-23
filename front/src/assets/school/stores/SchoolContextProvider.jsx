import {SchoolContext} from "./SchoolContext.jsx";
import {useState} from "react";
import {GetSchoolsByFilterPromise} from "../promises/GetSchoolsByFilterPromise.js";
import {DeactivateSchoolPromise} from "../promises/DeactivateSchoolPromise.js";
import {CreateSchoolPromise} from "../promises/CreateSchoolPromise.js";

export default function SchoolContextProvider({children}) {

    const [filterActive, setFilterActive] = useState(null)
    const [filterRegion, setFilterRegion] = useState(null)
    const [filterSchoolType, setFilterSchoolType] = useState(null)
    const [isOpenCreationDialog, setOpenCreationDialog] = useState(false)
    const [isOpenDeactivationDialog, setOpenDeactivationDialog] = useState(false)
    const [idDeactivationDialog, setIdDeactivationDialog] = useState(false)
    const [nameDeactivationDialog, setNameDeactivationDialog] = useState(false)
    const [newSchoolEdrpou, setNewSchoolEdrpou] = useState(null)
    const [newSchoolName, setNewSchoolName] = useState(null)
    const [newSchoolRegion, setNewSchoolRegion] = useState(null)
    const [newSchoolSchoolType, setNewSchoolSchoolType] = useState(null)
    const [schools, setSchools] = useState([])

    const getSchools = () => {
        GetSchoolsByFilterPromise().then(response => {
            setSchools(response.data)
        })
    }

    const handleChangeFilterActive = (active) => {
        setFilterActive(active)
    }

    const handleChangeFilterSchoolType = (schoolType) => {
        setFilterSchoolType(schoolType)
    }

    const handleChangeFilterRegion = (region) => {
        setFilterRegion(region)
    }

    const handleChangeNewSchoolEdrpou = (edrpou) => {
        setNewSchoolEdrpou(edrpou)
    }

    const handleChangeNewSchoolName = (name) => {
        setNewSchoolName(name)
    }

    const handleChangeNewSchoolRegion = (region) => {
        setNewSchoolRegion(region)
    }

    const handleChangeNewSchoolSchoolType = (schoolType) => {
        setNewSchoolSchoolType(schoolType)
    }

    const handleClickCreationDialogClose = () => {
        setOpenCreationDialog(false)
    }

    const handleClickCreationDialogConfirm = () => {
        CreateSchoolPromise(newSchoolName, newSchoolRegion, newSchoolEdrpou, newSchoolSchoolType)
            .then(() => {
                getSchools()
                setNewSchoolName(null)
                setNewSchoolRegion(null)
                setNewSchoolEdrpou(null)
                setNewSchoolSchoolType(null)
                setOpenCreationDialog(false)
            })
    }

    const handleClickCreationDialogOpen = () => {
        setOpenCreationDialog(true)
    }


    const handleClickDeactivationDialogClose = () => {
        setOpenDeactivationDialog(false)
    }

    const handleClickDeactivationDialogConfirm = () => {
        DeactivateSchoolPromise(idDeactivationDialog)
            .then(() => {
                getSchools()
                setOpenDeactivationDialog(false)
            })
    }

    const handleClickDeactivationDialogOpen = (id, name) => {
        setOpenDeactivationDialog(true)
        setIdDeactivationDialog(id)
        setNameDeactivationDialog(name)
    }

    const handleClickFilter = () => {
        GetSchoolsByFilterPromise(filterActive, filterRegion, filterSchoolType)
            .then(response => {
            setSchools(response.data)
        })
    }

    const contextValue = {
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
    }
    return (
        <SchoolContext.Provider value={contextValue}>
            {children}
        </SchoolContext.Provider>
    )
}
