import { Link } from "@material-ui/core";
import React from 'react';
import NextLink from 'next/link';

export default function LinkTag(props){

    return(
            <div style={{padding: '3px 0px'}}>
            <NextLink href={props.link}>
                <Link>
                    <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>{props.title}</span>
                </Link>
            </NextLink>
            </div>
    )
}