import React,{useEffect,useState} from 'react';

type props={
pdfUrl:string,
width:number,
height:number
}

const PdfReader=({pdfUrl,width,height}:props)=>{
    const[mounted,setMounted]=useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])
    return(
        mounted && (
            <div className='flex justify-center'>
                <object
                data={pdfUrl}
                type='application/pdf'
                width={width}
                height={height}
                >
                    <iframe title='PDF' src={pdfUrl} width={width} height={height}>
                        <p>Este navegador no soporta pdf</p>
                    </iframe>

                </object>
            </div>
        )
    )
}

export default PdfReader;