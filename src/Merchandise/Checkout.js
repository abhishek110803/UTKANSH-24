import React, { useState } from 'react';
import './Checkout.css'
const MerchandiseForm = () => {
    const [checkoutDisabled, setCheckoutDisabled] = useState(true);

    // Function to handle input change and enable/disable checkout button
    const handleInputChange = () => {
        const personalForm = document.getElementById("personal-form");
        const tshirtForm = document.getElementById("tshirt-form");

        const areFormsFilled = () => {
            const personalData = new FormData(personalForm);
            const tshirtData = new FormData(tshirtForm);
            for (let value of personalData.values()) {
                if (!value) return false;
            }
            for (let value of tshirtData.values()) {
                if (!value) return false;
            }
            return true;
        }

        setCheckoutDisabled(!areFormsFilled());
    }

    // Function to handle checkout button click
    const handleCheckoutButton = (event) => {
        event.preventDefault();
        const personalForm = document.getElementById("personal-form");
        const tshirtForm = document.getElementById("tshirt-form");
        const personalData = new FormData(personalForm);
        const tshirtData = new FormData(tshirtForm);

        // Use fetch to send data from form1
        fetch("/form-1", {
            method: 'POST',
            body: personalData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('personal Form Success:', data);
            })
            .catch(error => {
                console.error('personal form Error:', error);
            });

        // Use fetch to send data from form2
        fetch("/form-1", {
            method: 'POST',
            body: tshirtData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('tshirtForm Success:', data);
            })
            .catch(error => {
                console.error('tshirtForm Error:', error);
            });

        // Open the modal
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    }

    // Function to handle reference form submission
    const handleReferenceForm = (event) => {
        event.preventDefault();
        const reference = document.getElementById("reference").value;
        if (!reference) {
            alert("Please enter the reference number of payment.");
        } else {
            fetch("/form-2", {
                method: "POST",
                body: JSON.stringify({ reference }),
            })
                .then((response) => response.json())
                .then(data => {
                    alert("Thank you for your order!");
                    const modal = document.getElementById("modal");
                    modal.style.display = "none";
                    window.location.reload();
                })
                .catch(error => console.error('Reference form Error:', error));
        }
    }

    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    return (
        <div className="containercontact">
            <div className="left-section">
                <form id="personal-form" action="/form-1" method="POST" onChange={handleInputChange}>
                    <h2 style={{ color: 'rgb(71, 71, 71)', marginBottom: '20px' }}>Personal Details</h2>
                    <label htmlFor="name">Applicant Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="roll">Roll Number</label>
                    <input type="text" id="roll" name="roll" required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="hostel">Hostel Name</label>
                    <input type="text" id="hostel" name="hostel" required />
                    <p id="personal-message"></p>
                </form>
            </div>
            <div class="right-section">
                <div className="upper-section">
                    <form id="tshirt-form" action="/form-1" method="POST" onChange={handleInputChange}>
                        <h2 style={{ color: 'rgb(71, 71, 71)', marginBottom: '20px' }}>T-Shirt Details</h2>
                        <label htmlFor="print">Name to Print</label>
                        <input type="text" id="print" name="print" required />
                        <label htmlFor="size">Size</label>
                        <select id="size" name="size" required>
                            <option value="">Select a size</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                        </select>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="10" required />
                        <p id="tshirt-message"></p>
                    </form>
                </div>
                <div class="lower-section">
                    <button id="checkout-button" onClick={handleCheckoutButton} disabled={checkoutDisabled}>
                        <h3>Payment</h3>
                    </button>
                </div>

            </div>

            <div id="modal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>x</span>
                    <h3>Scan the QR code to pay</h3>
                    {/* Add an img element with the src attribute set to the QR code image */}
                    <img src="/img/exampleqr.jpg" alt="QR code for payment" className="qrimg" />
                    <form id="reference-form" action="/form-2" method="POST" onSubmit={handleReferenceForm}>
                        <label htmlFor="reference">Enter the reference number of payment</label>
                        <input type="text" id="reference" name="reference" required />
                        <button type="submit" id="final-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MerchandiseForm;
