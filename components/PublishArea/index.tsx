import Button from "../Button"
import FileInput from "../FileInput"
import Input from "../Input"
import TextArea from "../TextArea"

const PublishArea = () => {
    const style = {
        form: ``
    }

    return (
        <div className={`flex justify-center`}>
            <form action="" className={`w-5/6`}>
                <Input 
                    id="type" type="text" label="Tipo"
                />
                
                <FileInput id="img" label="Imagem"/>

                <TextArea
                    id="title" label="Titulo" rows={2}
                />

                <TextArea 
                    id="content" label="Conteúdo" rows={4}
                />

                <div className={`mt-4`}>
                    <Button content="Publicar" />
                </div>
            </form>
        </div>
    )
}

export default PublishArea