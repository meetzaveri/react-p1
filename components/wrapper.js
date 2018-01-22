import React from 'react';
import styled from 'styled-components';

const DoughnutWrapper = styled.div`
    top: ${props=>props.setpos ? props.setpos + 'px' : '40px'};
    left: ${props=>props.setpos ? props.setpos + 'px'  : '40px'};
    background: transparent;
    width: 220px;
    height: 220px;
    display: block;
    -webkit-clip: auto;
    clip: auto;
    position: relative;
    border-radius: 50%;
    z-index : 2147483647;
`

export default DoughnutWrapper;