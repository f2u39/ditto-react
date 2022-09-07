import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ActCreateForm() {

  return (
    <main className="col-8 mx-auto">
      <h3 class="mb-3 text-center">Create Activity</h3>
      <div className="col-12 p-3 mx-auto border rounded-3 bg-dark">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type</Form.Label>
            <Form.Select className='bg-dark text-light' type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Select className='bg-dark text-light' placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
      </div>
    </main>
  );
}