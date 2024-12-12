'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Tiktok = () => {
    const router = useRouter();
    const handleOnClickButton = () => {
        router.push("/");
    }
    
    return (
        <>
            Tiktok
            <div>
                <Button variant="primary"
                    onClick={() => handleOnClickButton()}
                >Back home</Button>
            </div>
        </>
    )
}

export default Tiktok;