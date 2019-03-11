<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        
            <p>ID: <input type="number" id="IDinput"/></p>
            <p>name: <input type="text" id="nameinput"/></p>
            <button onclick="add()">add</button>
        
        
        <table>
            
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
            <tbody id="body1">
                <tr>
                    <td>2</td>
                    <td>matan</td>   
                </tr>
            </tbody>
        </table>
        <script>
            function Person(_id , _name)
            {
                this.id = _id
                this.name = _name
            }
            function add()
            {
                var x = $('#IDinput').val() 
                var y = $('#nameinput').val()
                var p = new Person(x , y)
                addrow(p)
            }
            function addrow(p)
            {
               $('#body1').append(`<tr><td>${p.id}</td><td>${p.name}</td></tr>`)
            }
        </script>
    </body>
</html>
