import React, { useState, useEffect } from 'react'
import './listCar.css'

function listCar() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            // Resim önizlemesi için URL oluştur
            const previewURL = URL.createObjectURL(file);
            setImagePreview([...imagePreview, previewURL]);
        }
    }

    // Component unmount olduğunda URL'leri temizle
    useEffect(() => {
        return () => {
            // Oluşturulan URL'leri temizle
            imagePreview.forEach(url => URL.revokeObjectURL(url));
        };
    }, []);

    return (
        <div className='list-car'>
            <div className='list-car-container'>
                <div className='list-car-header'>
                    <h1>List Your Car</h1>
                </div>
                <div className='list-car-form'>
                    <form>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Car Model</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='car-name' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Price</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='car-price' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Description</label>
                            </div>
                            <div className='form-group-input'>
                                <textarea id='car-name' name='car-description' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Year</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='car-year' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Seat</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='car-seat' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Fuel</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='car-fuel' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Mileage</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='number' id='car-name' name='car-mileage' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Transmission</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='car-transmission' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Color</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='car-color' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-group-label'>
                                <label htmlFor='car-name'>Location</label>
                            </div>
                            <div className='form-group-input'>
                                <input type='text' id='car-name' name='car-location' />
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
                                    name='car-image' 
                                    accept="image/*"
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
