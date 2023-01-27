interface ContactFormParams {
    message: string
}

const ContactFormError:React.FC<ContactFormParams> = ({ message }):JSX.Element => {
  return (
    <div>{message}</div>
  )
}

export default ContactFormError