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
    navigate('admin-home')
}

export const goToAppFormPage = (navigate) => {
    navigate('app-form')
}

export const goToCreateTripPage = (navigate) => {
    navigate('create-trip')
}

export const goToTripsPage = (navigate) => {
    navigate('list-trips')
}

export const goToTripDetailPage = (navigate) => {
    navigate('trip-details')
}
