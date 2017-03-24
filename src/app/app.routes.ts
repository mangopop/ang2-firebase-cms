import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './auth-guard.service';

const routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'about',
    component:AboutComponent,
    canActivate: [ AuthGuard ]
  },
]

export default RouterModule.forRoot(routes)