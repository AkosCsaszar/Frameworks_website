<script>
    import { Dropdown } from "bootstrap";
    import "./scss/custom.scss";
</script>




<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Frameworks</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><rect width="18" height="2" x="3" y="11" fill="currentColor" rx=".95" ry=".95"/><rect width="18" height="2" x="3" y="16" fill="currentColor" rx=".95" ry=".95"/><rect width="18" height="2" x="3" y="6" fill="currentColor" rx=".95" ry=".95"/></svg> 
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Websites
                    </a>
                    
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="react">React Site</a></li>
                        <li><a class="dropdown-item" href="vue">Vue Site</a></li>
                        <li><a class="dropdown-item" href="angular">Angular Site</a></li>
                    </ul>
                </li>
                
            </ul>
            
        </div>
    </div>
</nav>
