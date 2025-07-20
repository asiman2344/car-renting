import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './listCar.css'
import axios from 'axios'

function listCar() {
    const navigate = useNavigate()
    const [selectedImages, setSelectedImages] = useState([]); 
    const [imagePreview, setImagePreview] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); 
        if (files.length > 0) {
            setSelectedImages([...selectedImages, ...files]); 
            
            const newPreviewURLs = files.map(file => URL.createObjectURL(file));
            setImagePreview([...imagePreview, ...newPreviewURLs]);
        }
    }

    useEffect(() => {
        return () => {
            imagePreview.forEach(url => URL.revokeObjectURL(url));
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(e.target);
            
            const data = Object.fromEntries(formData);
            Object.keys(data).forEach(key => {
                if (key !== 'images') { 
                    formData.set(key, data[key]);
                }
            });

            selectedImages.forEach((image, index) => {
                formData.append('images', image); 
            });

            const response = await axios.post('http://localhost:3000/addProduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            });

            console.log('Başarıyla yüklendi:', response.data);
            
            e.target.reset();
            setSelectedImages([]);
            setImagePreview([]);
            navigate('/')

        } catch (error) {
            console.error('Yükleme hatası:', error);
        }
    }

    return (
        <div className='list-car'>
            <div className='list-car-container'>
                <div className='list-car-header'>
                    <h1>List Your Car</h1>
                </div>
                <div className='list-car-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Car Model</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='model' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Price</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='price' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Description</label>
                            </div>
                            <div className='form-group-input'>
                                <textarea id='car-name' name='description' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Year</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='year' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Seat</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='seat' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Fuel</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='fuel' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Mileage</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='mileage' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Transmission</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='transmission' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Color</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='color' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Location</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='location' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-image'>Araç Resmi</label>
                            </div>
                            <div className='form-group-input'>
                                <input 
                                    onChange={handleImageChange} 
                                    type='file' 
                                    id='car-image' 
                                    name='images' 
                                    // accept="image/*"
                                    placeholder='Resim Yükle' 
                                />
                            </div>
                        </div>
                        <div className='images'>
                            <div className='image-container'>
                                {imagePreview.map((url, index) => (
                                    <div key={index} className='image-item'>
                                        <img src={url} alt={`Araç önizleme ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='form-button'>
                            <button type='submit'>Araç Ekle</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default listCar
