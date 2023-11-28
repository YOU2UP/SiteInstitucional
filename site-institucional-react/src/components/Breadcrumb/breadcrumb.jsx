import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Breadcrumb = ({ links, currentPage}) => {
    return (
        <Breadcrumbs separator={
            <span style={{ fontSize: '1.2rem', margin: '0 8px' }}>
                &gt;
            </span>
            }
            aria-label="breadcrumb"
            style={{ marginLeft: '50px', marginTop: '10px' }}>

            {links.map((link, index) => (
                <Link
                    key={index}
                    color={currentPage === link.to ? 'primary' : 'textPrimary'}
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