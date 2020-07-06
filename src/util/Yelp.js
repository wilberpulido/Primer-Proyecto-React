

const apiKey='z7l5qIgfs8Dd6vEBsw_ruO7g57nN2DMgtuqfwjIhtgHQx20TAJ_zZL9ItJfllmlSmhUcrOkLhS2pbACY-WeTOuy4kuaUp33HrJQgJXHXUEbr0_ksSeUSFTGcI_YBX3Yx';

const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {headers:{
                        Authorization:`Bearer ${apiKey}`
                    }
                }
                ).then(response =>{
                return response.json();
                }
                ).then(jsonResponse =>{
                    if (jsonResponse.businesses){
                        console.log(jsonResponse.businesses);
                        return jsonResponse.businesses.map(business=>{
                            return {
                                'id': business.id,
                                'imageSrc': business.image_url,
                                'name': business.name,
                                'address': business.location.address1,
                                'city': business.location.city,
                                'state': business.location.state,
                                'zipCode': business.location.zip_code,
                                'category': business.categories[0].title,
                                'rating': business.rating,
                                'reviewCount': business.review_count
                            }}
                        );
                }
            }   
        )
    }
};
export default Yelp;