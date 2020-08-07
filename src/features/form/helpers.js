export const handleOnlyNumberAvailable = (e) => {
    const numberRegex = new RegExp('[0-9]')
    const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode)
    if (!numberRegex.test(pressedKey)) {
        e.preventDefault()
        return false
    }
}
