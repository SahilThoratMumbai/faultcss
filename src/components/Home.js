import React, { useState } from 'react'

const Home = () => {
  const [cards]=useState([
    {
      title:'',
     
      link :<div class="nav-item">
      <a class="nav-link" className='collcard2' href="/Card1">Read More</a>
    </div>,
    
      text:'A collision occurs when more than one value to be hashed by a particular hash function hash to the same slot in the table or data structure (hash table) being generated by the hash function.'
    },
  ])
  
  return (
    <React.Fragment>
      
      <div className='mainbox'>
    <div class="box">
    <h1>What is Hashing?</h1>
  </div>
  <div className='para1'>
    
  Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string.
 <br/><br/>
 The most popular use for hashing is the implementation of hash tables. A hash table stores key and value pairs in a list that is accessible through its index. Because key and value pairs are unlimited, the hash function will map the keys to the table size. A hash value then becomes the index for a specific element.
 <br/><br/>
 
A hash function generates new values according to a mathematical hashing algorithm, known as a hash value or simply a hash. To prevent the conversion of hash back into the original key, a good hash always uses a one-way hashing algorithm. 
  </div>
  <div className='hashinguse'>
  <h1>Why We Use Hashing???</h1>
  </div>
  <div className='para2'>
    <strong>Data Retrieval</strong>
<br/>
Hashing uses functions or algorithms to map object data to a representative integer value. A hash can then be used to narrow down searches when locating these items on that object data map.
<br/><br/>
For example, in hash tables, developers store data -- perhaps a customer record -- in the form of key and value pairs. The key helps identify the data and operates as an input to the hashing function, while the hash code or the integer is then mapped to a fixed size.
<br/><br/>
Hash tables support functions that include the following:
<ul>
  <li>insert (key, value)</li>
  <li>get (key)
</li>
  <li>delete (key)</li>
</ul>

  </div>
  <div className='Img1'>
    <br></br>
  <img src="https://i.ibb.co/9v3JWhq/Whats-App-Image-2023-08-02-at-1-30-28-PM.jpg\" alt="image"  style={{ width: '800px', height: '600px' }}/>
  </div>
  <div className='para3'>
  <strong>Digital signatures</strong>
  <br/><br/>
In addition to enabling rapid data retrieval, hashing helps encrypt and decrypt digital signatures used to authenticate message senders and receivers. In this scenario, a hash function transforms the digital signature before both the hashed value (known as a message digest) and the signature are sent in separate transmissions to the receiver.
<br/><br/>
Upon receipt, the same hash function derives the message digest from the signature, which is then compared with the transmitted message digest to ensure both are the same. In a one-way hashing operation, the hash function indexes the original value or key and enables access to data associated with a specific value or key that is retrieved.
  </div>
  <div className='Img2'>
    <br></br>
   <img src='https://i.ibb.co/K2rQG4x/Whats-App-Image-2023-08-08-at-10-23-00-PM.jpg' alt="image"  style={{ width: '800px', height: '600px' }}/>
  </div> 
  <div className="operations">
  <strong>Fundamental Operations:</strong>

<ul>
  <li><strong>HashTable:</strong> Use this operation to create a new hash table.</li>
  <li><strong>Delete: </strong>This operation is used to remove a specific key-value pair from the hash table.</li>
  <li><strong>Get:</strong> This operation is used to find a key within the hash table and return the value associated with that key.</li>
  <li><strong>Put:</strong> This operation is used to add a new key-value pair to the hash table</li>
  <li><strong>DeleteHashTable:</strong> This operation is used to remove the hash table.</li>
 
</ul>
  </div>
  <div className="compo">
 <strong>Components of Hashing:</strong> <br></br>
<strong>Hash Table:</strong> An array that stores pointers to records that correspond to a specific phone number. If no existing phone number has a hash function value equal to the index for the entry, the entry in the hash table is NIL. In simple terms, a hash table is a generalisation of an array. A hash table provides the functionality of storing a collection of data in such a way that it is easy to find those items later if needed. This makes element searching very efficient.<br/><br/>
<strong>Hash Function:</strong> A function that reduces a large phone number to a small practical integer value. In a hash table, the mapped integer value serves as an index. So, to put it simply, a hash function is used to convert a given key into a specific slot index. Its primary function is to map every possible key to a unique slot index. The hash function is referred to as a perfect hash function if each key maps to a distinct slot index. Although it is exceedingly challenging to construct the ideal hash function, it is our responsibility as programmers to do so in a way that minimises the likelihood of collisions. This section will cover collision.

  </div>
  <div className='collision'>
  <h>What is Collision in Hashing?</h></div>
 
  <div className="collcard">
      <section>
        <div className='container1'>
          <h1></h1>
          <div className='cards'>
            {
              cards.map((card,i)=>(
                <div key={i} className='collcard'>
              <h3>{card.title}</h3>
              <p>
              {
                card.text
              }

              </p>
            
<p>
  {
  card.link
}
</p>
            </div>

              ))
            }
            
          </div>
        </div>
      </section>
    </div>
  </div>
  </React.Fragment>
  
  )
}

export default Home
