import Swal from 'sweetalert2';


export const showSuccessAlert = (title, text) => {
    return Swal.fire({
        title,
        text,
        icon: 'success'
    })
}

export const showErrorAlert = (title , text) => {
    return Swal.fire({
        title,
        text,
        icon: 'error'
    })
}


export const showConsentAlert = (title , text) => {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
}