import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

fdescribe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have init value', (done) => {
    service.select((x)=>x)
    .subscribe( (x1)=> {
        expect(x1).toEqual({userList: []});
        //expect(x1).toThrowError();
        done();
    }) 
  });

  it('should update state' , (done)=>{
      service.update(x=>{return {userList: x.userList.concat({username: 'Gogo'}) } });
      service.select(x=>x.userList).subscribe(x=> {
        expect(x.length).toEqual(1);
        done();
    });
    
  })


});