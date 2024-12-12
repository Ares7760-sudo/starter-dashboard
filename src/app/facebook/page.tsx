'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
    const router = useRouter();
    const handleOnClickButton = () => {
        router.push("/");
    }
    
    return (
        <>
            Facebook
            <div>
                <Button variant="primary"
                    onClick={() => handleOnClickButton()}
                >Back home</Button>
            </div>
        </>
    )
}

export default Facebook;