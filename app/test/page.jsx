
const Page = () => {

    const handleForm = async (formData) => {
        "use server"
        console.log("Heloo")
        console.log(formData)
    }
    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <button>Sned</button>
            </form>
        </div>
    )
}

export default Page
