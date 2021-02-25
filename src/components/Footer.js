import styled from 'styled-components'

export default function Footer() {
    return(
        <FooterWrapper>
            <p>
                Created by <a href="https://github.com/codebypaul">Paul Williams</a> and the <a href="https://pwprojectworks.com">PW Project Works team</a>. All character names and associated names are trademarks of Netflix.
            </p>
            <span>©2021 PW Project Works</span>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background: rgba(225,198,153,1);
    padding: 4rem 2rem;
`