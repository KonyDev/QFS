#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSTextContainer_symbols(JSContext*);
@protocol NSTextContainerInstanceExports<JSExport, NSCodingInstanceExports_, NSTextLayoutOrientationProviderInstanceExports_>
@property (nonatomic) NSUInteger maximumNumberOfLines;
@property (nonatomic) BOOL widthTracksTextView;
@property (getter=isSimpleRectangularTextContainer,readonly,nonatomic) BOOL simpleRectangularTextContainer;
@property (nonatomic) NSLineBreakMode lineBreakMode;
@property (nonatomic) CGFloat lineFragmentPadding;
@property (nonatomic) BOOL heightTracksTextView;
@property (assign,nonatomic) NSLayoutManager * layoutManager;
@property (copy,nonatomic) NSArray * exclusionPaths;
@property (nonatomic) CGSize size;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
JSExportAs(initWithSize,
-(id) jsinitWithSize: (CGSize) size );
-(void) replaceLayoutManager: (NSLayoutManager *) newLayoutManager ;
@end
@protocol NSTextContainerClassExports<JSExport, NSCodingClassExports_, NSTextLayoutOrientationProviderClassExports_>
@end
#pragma clang diagnostic pop