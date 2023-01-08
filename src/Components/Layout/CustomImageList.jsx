import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageApi from './CustomImageApi/CustomImageApi'
import Box from '@mui/material/Box'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function CustomImageList() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <h1>Image</h1>
                <h3>Standard Image List:</h3>
                <ImageList sx={{ width: '60%', height: 450, margin: 'auto' }} cols={3} rowHeight={164}>

                    {imageApi.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Box sx={{ width: '100%' }}>
                <h3>Quilted Image List:</h3>
                <ImageList sx={{ width: '60%', height: 450, margin: 'auto' }} variant="quilted" cols={4} rowHeight={121}>

                    {imageApi.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    )
}

export default CustomImageList;