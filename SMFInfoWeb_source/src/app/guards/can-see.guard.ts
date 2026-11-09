import { CanActivateFn } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

export const canSeeGuard: CanActivateFn = (route, state) => {
  
  
  
  const key = route.paramMap.get("key");
  const user = route.paramMap.get("user");
  
  if(key!=='Xcvs8Nd'){
    return false;
  }
  
  return true;
};
