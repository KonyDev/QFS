#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextDragPreviewRenderer_symbols(JSContext*);
@protocol UITextDragPreviewRendererInstanceExports<JSExport>
@property (readonly,nonatomic) NSLayoutManager * layoutManager;
@property (readonly,nonatomic) CGRect firstLineRect;
@property (readonly,nonatomic) CGRect lastLineRect;
@property (readonly,nonatomic) UIImage * image;
@property (readonly,nonatomic) CGRect bodyRect;
JSExportAs(initWithLayoutManagerRangeUnifyRects,
-(id) jsinitWithLayoutManager: (NSLayoutManager *) layoutManager range: (NSRange) range unifyRects: (BOOL) unifyRects );
JSExportAs(initWithLayoutManagerRange,
-(id) jsinitWithLayoutManager: (NSLayoutManager *) layoutManager range: (NSRange) range );
@end
@protocol UITextDragPreviewRendererClassExports<JSExport>
@end
#pragma clang diagnostic pop