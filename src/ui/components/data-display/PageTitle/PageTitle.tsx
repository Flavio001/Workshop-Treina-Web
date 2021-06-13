import React from 'react'
import { PageTitleContainer } from './PageTitle.style'
import { PageTitleStyled } from './PageTitle.style'
import { Container } from '@material-ui/core'

interface PageTitleProps{
    titulo: string;
    subtitulo: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) =>{
    return(
        <Container>
        <PageTitleContainer>
            <PageTitleStyled>
                {props.titulo}
            </PageTitleStyled>
            {props.subtitulo}
        </PageTitleContainer>
        </Container>
    )
}
export default PageTitle