import {SchoolContext} from "./SchoolContext.jsx";
import {useState} from "react";
import {GetSchoolsByFilterPromise} from "../promises/GetSchoolsByFilterPromise.js";
import {DeactivateSchoolPromise} from "../promises/DeactivateSchoolPromise.js";
import {CreateSchoolPromise} from "../promises/CreateSchoolPromise.js";

export default function SchoolContextProvider({children}) {

    const [edrpouNewSchool, setEdrpouNewSchool] = useState(null)
    const [filterActive, setFilterActive] = useState(null)
    const [filterRegion, setFilterRegion] = useState(null)
    const [filterSchoolType, setFilterSchoolType] = useState(null)
    const [isOpenCreationDialog, setOpenCreationDialog] = useState(false)
    const [isOpenDeactivationDialog, setOpenDeactivationDialog] = useState(false)
    const [idDeactivationDialog, setIdDeactivationDialog] = useState(false)
    const [nameDeactivationDialog, setNameDeactivationDialog] = useState(false)
    const [nameNewSchool, setNameNewSchool] = useState(null)
    const [regionNewSchool, setRegionNewSchool] = useState(null)
    const [schoolTypeNewSchool, setSchoolTypeNewSchool] = useState(null)
    const [schools, setSchools] = useState([])

    const getSchools = () => {
        GetSchoolsByFilterPromise().then(response => {
            setSchools(response.data)
        })
    }
    const handleChangeEdrpouNewSchool = (edrpou) => {
        setEdrpouNewSchool(edrpou)
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

    const handleChangeNameNewSchool = (name) => {
        setNameNewSchool(name)
    }

    const handleChangeRegionNewSchool = (region) => {
        setRegionNewSchool(region)
    }

    const handleChangeSchoolTypeNewSchool = (schoolType) => {
        setSchoolTypeNewSchool(schoolType)
    }

    const handleClickCreationDialogClose = () => {
        setOpenCreationDialog(false)
    }

    const handleClickCreationDialogConfirm = () => {
        CreateSchoolPromise(nameNewSchool, regionNewSchool, edrpouNewSchool, schoolTypeNewSchool)
            .then(() => {
                getSchools()
                setNameNewSchool(null)
                setRegionNewSchool(null)
                setEdrpouNewSchool(null)
                setSchoolTypeNewSchool(null)
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
        edrpouNewSchool,
        filterActive,
        filterRegion,
        filterSchoolType,
        getSchools,
        handleChangeEdrpouNewSchool,
        handleChangeFilterActive,
        handleChangeFilterSchoolType,
        handleChangeFilterRegion,
        handleChangeNameNewSchool,
        handleChangeRegionNewSchool,
        handleChangeSchoolTypeNewSchool,
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
        nameNewSchool,
        regionNewSchool,
        schoolTypeNewSchool,
        schools,
    }
    return (
        <SchoolContext.Provider value={contextValue}>
            {children}
        </SchoolContext.Provider>
    )
}
