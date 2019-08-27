#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISearchContainerViewController_symbols(JSContext*);
@protocol UISearchContainerViewControllerInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UISearchController * searchController;
JSExportAs(initWithSearchController,
-(id) jsinitWithSearchController: (UISearchController *) searchController );
@end
@protocol UISearchContainerViewControllerClassExports<JSExport>
@end
#pragma clang diagnostic pop