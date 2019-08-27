#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISearchController_symbols(JSContext*);
@protocol UISearchControllerInstanceExports<JSExport, UIViewControllerTransitioningDelegateInstanceExports_, UIViewControllerAnimatedTransitioningInstanceExports_>
@property (assign,nonatomic) BOOL hidesNavigationBarDuringPresentation;
@property (assign,nonatomic) BOOL obscuresBackgroundDuringPresentation;
@property (nonatomic,weak) id searchResultsUpdater;
@property (nonatomic,weak) id delegate;
@property (getter=isActive,assign,nonatomic) BOOL active;
@property (readonly,nonatomic,strong) UIViewController * searchResultsController;
@property (assign,nonatomic) BOOL dimsBackgroundDuringPresentation;
@property (readonly,nonatomic,strong) UISearchBar * searchBar;
JSExportAs(initWithSearchResultsController,
-(id) jsinitWithSearchResultsController: (UIViewController *) searchResultsController );
@end
@protocol UISearchControllerClassExports<JSExport, UIViewControllerTransitioningDelegateClassExports_, UIViewControllerAnimatedTransitioningClassExports_>
@end
@protocol UISearchControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) presentSearchController: (UISearchController *) searchController ;
-(void) willDismissSearchController: (UISearchController *) searchController ;
-(void) willPresentSearchController: (UISearchController *) searchController ;
-(void) didDismissSearchController: (UISearchController *) searchController ;
-(void) didPresentSearchController: (UISearchController *) searchController ;
@end
@protocol UISearchControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UISearchResultsUpdatingInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) updateSearchResultsForSearchController: (UISearchController *) searchController ;
@end
@protocol UISearchResultsUpdatingClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop