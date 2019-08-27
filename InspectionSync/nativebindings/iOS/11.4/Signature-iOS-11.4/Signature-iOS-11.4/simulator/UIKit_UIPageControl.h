#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPageControl_symbols(JSContext*);
@protocol UIPageControlInstanceExports<JSExport>
@property (nonatomic) NSInteger numberOfPages;
@property (nonatomic) BOOL hidesForSinglePage;
@property (nonatomic,strong) UIColor * currentPageIndicatorTintColor;
@property (nonatomic,strong) UIColor * pageIndicatorTintColor;
@property (nonatomic) BOOL defersCurrentPageDisplay;
@property (nonatomic) NSInteger currentPage;
-(CGSize) sizeForNumberOfPages: (NSInteger) pageCount ;
-(void) updateCurrentPageDisplay;
@end
@protocol UIPageControlClassExports<JSExport>
@end
#pragma clang diagnostic pop