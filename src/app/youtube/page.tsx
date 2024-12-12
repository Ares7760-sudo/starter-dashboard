'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Youtube = () => {
    const router = useRouter();
    const handleOnClickButton = () => {
        router.push("/");
    }
    
    return (
        <>
            Youtube
            <div>
                <Button variant="primary"
                    onClick={() => handleOnClickButton()}
                >Back home</Button>
            </div>
        </>
    )
}

export default Youtube;