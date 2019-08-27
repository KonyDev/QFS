#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIRefreshControl_symbols(JSContext*);
@protocol UIRefreshControlInstanceExports<JSExport>
@property (nonatomic,strong) UIColor * tintColor;
@property (getter=isRefreshing,readonly,nonatomic) BOOL refreshing;
@property (nonatomic,strong) NSAttributedString * attributedTitle;
-(void) endRefreshing;
-(id) jsinit;
-(void) beginRefreshing;
@end
@protocol UIRefreshControlClassExports<JSExport>
@end
#pragma clang diagnostic pop