var searchIndex = JSON.parse('{\
"os":{"doc":"The main module and entrypoint","t":"JFNCNNCCNCNCENHCCHQQCCNNNSFSFEJSFSFTTJSFTTONONNNNNONNNNNNNNNNNNNNNNNOOONNNNNNNNNNEEENNNNNNNNNNNNNHHNNNNNNNNNNNNNNONHNNHNNNNNNNNNNNNNNNNNNNNNNSSSSFNNNNHNNNNFKIFFOMNNNNNNNOOMNNNOONHHHHNNNNHNNNMNNOOONNNNNNNNNJHHHFNNNNNHNNHNNNNECFNNNNONNNNNSSCCHSHH","n":["HEAP_ALLOCATOR","PageAllocImpl","alloc","batch","borrow","borrow_mut","config","console","dealloc","frame_allocater","from","heap_allocator","init_heap","into","kernel_interrupt","lang_items","logging","main","print","println","sync","syscall","try_from","try_into","type_id","APP_BASE_ADDRESS","APP_MANAGER","APP_SIZE_LIMIT","AppManager","FrameTracker","KERNEL_STACK","KERNEL_STACK_SIZE","KernelStack","MAX_APP_NUM","MapPermission","R","U","USER_STACK","USER_STACK_SIZE","UserStack","W","X","__private_field","all","app_start","bitand","bitand_assign","bitor","bitor_assign","bits","bits","bitxor","bitxor_assign","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","cmp","complement","contains","current_app","data","data","deref","difference","empty","eq","extend","fmt","fmt","fmt","fmt","fmt","frame_alloc","frame_alloc_persist","frame_dealloc","from","from","from","from","from","from_bits","from_bits_truncate","from_bits_unchecked","from_iter","get_current_app","get_sp","get_sp","hash","hexdump","init","insert","intersection","intersects","into","into","into","into","into","into","is_all","is_empty","load_app","move_to_next_app","not","num_app","partial_cmp","print_app_info","print_app_info","remove","run_next_app","set","sub","sub_assign","symmetric_difference","to_owned","toggle","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","union","KERNEL_HEAP_SIZE","KERNEL_STACK_SIZE","PAGE_SIZE","USER_STACK_SIZE","Stdout","borrow","borrow_mut","from","into","print","try_from","try_into","type_id","write_str","FRAME_ALLOCATOR","FrameAllocator","FrameAllocatorImpl","FrameTracker","StackFrameAllocator","__private_field","alloc","alloc","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","current","current","dealloc","dealloc","deref","drop","end","end","fmt","frame_alloc","frame_alloc_persist","frame_allocator_test","frame_dealloc","from","from","from","init","init_frame_allocator","into","into","into","new","new","new","ppn","recycled","recycled","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","HEAP_SPACE","handle_alloc_error","init_heap","panic","Logger","borrow","borrow_mut","enabled","flush","from","init","into","log","puts","try_from","try_into","type_id","write_str","UPSafeCell","up","UPSafeCell","borrow","borrow_mut","exclusive_access","from","inner","into","new","try_from","try_into","type_id","SYSCALL_EXIT","SYSCALL_WRITE","fs","process","syscall","FD_STDOUT","sys_write","sys_exit"],"q":[[0,"os"],[25,"os::batch"],[141,"os::config"],[145,"os::console"],[155,"os::frame_allocater"],[205,"os::heap_allocator"],[208,"os::lang_items"],[209,"os::logging"],[223,"os::sync"],[225,"os::sync::up"],[236,"os::syscall"],[241,"os::syscall::fs"],[243,"os::syscall::process"],[244,"polyhal::addr"],[245,"polyhal::currrent_arch::context"],[246,"polyhal"],[247,"core::result"],[248,"core::any"],[249,"core::cmp"],[250,"core::iter::traits::collect"],[251,"core::fmt"],[252,"core::fmt"],[253,"core::hash"],[254,"polyhal::pagetable"],[255,"core::fmt"],[256,"core::panic::panic_info"],[257,"log"],[258,"log"]],"d":["","","","batch subsystem","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","kernel interrupt","","","the rust entry-point of os","print string macro","println string macro","Synchronization and interior mutability primitives","Implementation of syscalls","","","","","","","","","","","","","","","","","","","","","","Returns the set containing all flags.","","Returns the intersection between the two sets of flags.","Disables all flags disabled in the set.","Returns the union of the two sets of flags.","Adds the set of flags.","Returns the raw value of the flags currently stored.","","Returns the left flags, but with all the right flags …","Toggles the set of flags.","","","","","","","","","","","","","","Returns the complement of this set of flags.","Returns <code>true</code> if all of the flags in <code>other</code> are contained …","","","","","Returns the difference between the flags in <code>self</code> and <code>other</code>.","Returns an empty set of flags.","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, preserving all …","","","","","","","init batch subsystem","Inserts the specified flags in-place.","Returns the intersection between the flags in <code>self</code> and …","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Calls <code>U::from(self)</code>.","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if no flags are currently stored.","","","Returns the complement of this set of flags.","","","print apps info","","Removes the specified flags in-place.","run next app","Inserts or removes the specified flags depending on the …","Returns the set difference of the two sets of flags.","Disables all flags enabled in the set.","Returns the symmetric difference between the flags in <code>self</code> …","","Toggles the specified flags in-place.","","","","","","","","","","","","","","","","Returns the union of between the flags in <code>self</code> and <code>other</code>.","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","Uniprocessor interior mutability primitives","Wrap a static data structure inside it so that we are able …","","","Exclusive access inner data in UPSafeCell. Panic if the …","Returns the argument unchanged.","inner data","Calls <code>U::from(self)</code>.","User is responsible to guarantee that inner struct is only …","","","","","","File and filesystem-related syscalls","App management syscalls","handle syscall exception with <code>syscall_id</code> and other …","","write buf of length <code>len</code>  to a file with <code>fd</code>","task exits and submit an exit code"],"i":[0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,9,9,13,9,14,9,9,9,9,9,9,9,9,21,22,14,9,13,21,22,14,9,13,9,9,9,9,9,14,21,22,13,9,9,9,9,9,9,9,9,9,0,0,0,21,22,14,9,13,9,9,9,9,14,21,22,9,0,0,9,9,9,21,22,14,9,9,13,9,9,14,14,9,14,9,0,14,9,0,9,9,9,9,9,9,21,22,14,9,13,21,22,14,9,13,21,22,14,9,13,9,0,0,0,0,0,28,28,28,28,0,28,28,28,28,0,0,0,0,0,32,30,31,33,31,32,33,31,32,31,43,30,31,32,33,31,43,33,0,0,0,0,33,31,32,31,0,33,31,32,30,33,31,33,31,43,33,31,32,33,31,32,33,31,32,0,0,0,0,0,36,36,36,36,36,0,36,36,0,36,36,36,36,0,0,0,15,15,15,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0],"f":[0,0,[1,2],0,[-1,-2,[],[]],[-1,-2,[],[]],0,0,[[1,2],3],0,[-1,-1,[]],0,0,[-1,-2,[],[]],[[4,5],3],0,0,[6,3],0,0,0,0,[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[],9],0,[[9,9],9],[[9,9],3],[[9,9],9],[[9,9],3],[9,10],0,[[9,9],9],[[9,9],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[9,9],[[-1,-2],3,[],[]],[[9,9],11],[9,9],[[9,9],12],0,0,0,[13,[[15,[14]]]],[[9,9],9],[[],9],[[9,9],12],[[9,-1],3,[[17,[],[[16,[9]]]]]],[[9,18],19],[[9,18],19],[[9,18],19],[[9,18],19],[[9,18],19],0,0,0,[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[10,[[20,[9]]]],[10,9],[10,9],[-1,9,[[17,[],[[16,[9]]]]]],[14,6],[21,6],[22,6],[[9,-1],3,23],[[[24,[10]]],3],[[],3],[[9,9],3],[[9,9],9],[[9,9],12],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[9,25],[-1,-2,[],[]],[9,12],[9,12],[[14,6],3],[14,3],[9,9],0,[[9,9],[[20,[11]]]],[[],3],[14,3],[[9,9],3],[[],26],[[9,9,12],3],[[9,9],9],[[9,9],3],[[9,9],9],[-1,-2,[],[]],[[9,9],3],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],[-1,8,[]],[-1,8,[]],[-1,8,[]],[-1,8,[]],[[9,9],9],0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-1,[]],[-1,-2,[],[]],[27,3],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],[[28,29],19],0,0,0,0,0,0,[30,[[20,[2]]]],[31,[[20,[2]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,[[30,2],3],[[31,2],3],[32,[[15,[31]]]],[33,3],0,0,[[33,18],19],[[],[[20,[33]]]],[[],[[20,[2]]]],[[],3],[2,3],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[31,2,2],3],[[6,6],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[],30],[2,33],[[],31],0,0,0,[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],[-1,8,[]],[-1,8,[]],0,[34,26],[[],3],[35,26],0,[-1,-2,[],[]],[-1,-2,[],[]],[[36,37],12],[36,3],[-1,-1,[]],[[[20,[29]]],3],[-1,-2,[],[]],[[36,38],3],[[[24,[10]]],3],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],[[36,29],19],0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[[[15,[-1]]],[[39,[-1]]],[]],[-1,-1,[]],0,[-1,-2,[],[]],[-1,[[15,[-1]]],[]],[-1,[[7,[-2]]],[],[]],[-1,[[7,[-2]]],[],[]],[-1,8,[]],0,0,0,0,[[6,[40,[6]]],41],0,[[6,10,6],41],[42,26]],"c":[],"p":[[5,"PageAllocImpl",0],[5,"PhysPage",244],[1,"tuple"],[5,"TrapFrame",245],[6,"TrapType",246],[1,"usize"],[6,"Result",247],[5,"TypeId",248],[5,"MapPermission",25],[1,"u8"],[6,"Ordering",249],[1,"bool"],[5,"APP_MANAGER",25],[5,"AppManager",25],[5,"UPSafeCell",225],[17,"Item"],[10,"IntoIterator",250],[5,"Formatter",251],[8,"Result",251],[6,"Option",252],[5,"KernelStack",25],[5,"UserStack",25],[10,"Hasher",253],[1,"slice"],[5,"MappingFlags",254],[1,"never"],[5,"Arguments",251],[5,"Stdout",145],[1,"str"],[10,"FrameAllocator",155],[5,"StackFrameAllocator",155],[5,"FRAME_ALLOCATOR",155],[5,"FrameTracker",155],[5,"Layout",255],[5,"PanicInfo",256],[5,"Logger",209],[5,"Metadata",257],[5,"Record",257],[5,"RefMut",258],[1,"array"],[1,"isize"],[1,"i32"],[8,"FrameAllocatorImpl",155]],"b":[[76,"impl-Octal-for-MapPermission"],[77,"impl-LowerHex-for-MapPermission"],[78,"impl-Debug-for-MapPermission"],[79,"impl-UpperHex-for-MapPermission"],[80,"impl-Binary-for-MapPermission"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
