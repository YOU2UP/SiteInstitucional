import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Breadcrumb = ({ links }) => {
    return (
        <Breadcrumbs separator={
            <span style={{ fontSize: '1.2rem', margin: '0 8px' }}>
                &lt;
            </span>
            }
            aria-label="breadcrumb">

            {links.map((link, index) => (
                <Link
                    key={index}
                    color={index === links.length - 1 ? 'textPrimary' : 'inherit'}
                    component={RouterLink}
                    to={link.to}
                >
                    {link.label}
                </Link>
            ))}
        </Breadcrumbs>
    );
};

export default Breadcrumb;