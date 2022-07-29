export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToAdmHomePage = (navigate) =>{
    navigate('admin/trips/list')
}

export const goToAppFormPage = (navigate) => {
    navigate('/trips/application')
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToTripsPage = (navigate) => {
    navigate('/trips/list')
}

export const goToTripDetailPage = (navigate) => {
    navigate('/admin/trips/:id')
}
